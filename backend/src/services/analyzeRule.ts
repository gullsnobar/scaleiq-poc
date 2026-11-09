export type Rule = {
  keywords: string[];
  minConfidence: number;
};

export type RuleResult = {
  isRelevant: boolean;
  confidence: number;
  matchedKeywords: string[];
  reason: string;
  layer: 'rule';
};

const DEFAULT_RULE: Rule = {
  keywords: [
    'hiring',
    'looking for',
    'recommend',
    'frustrated with',
    'need help with',
  ],
  minConfidence: 0.6,
};

export function analyzeRule(content: string, rule?: Rule): RuleResult {
  const activeRule = rule ?? DEFAULT_RULE;
  const normalizedContent = content.toLowerCase();
  const matchedKeywords = activeRule.keywords.filter((keyword) =>
    normalizedContent.includes(keyword.toLowerCase()),
  );

  if (matchedKeywords.length === 0) {
    return {
      isRelevant: false,
      confidence: 0,
      matchedKeywords: [],
      reason: 'no keyword match',
      layer: 'rule',
    };
  }

  const confidence = Math.min(
    1,
    Number((0.4 + 0.2 * matchedKeywords.length).toFixed(1)),
  );
  const isRelevant = confidence >= activeRule.minConfidence;

  return {
    isRelevant,
    confidence,
    matchedKeywords,
    reason: isRelevant
      ? `matched: ${matchedKeywords.join(', ')}`
      : 'below threshold',
    layer: 'rule',
  };
}
