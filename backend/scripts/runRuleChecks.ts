import { analyzeRule } from '../src/services/analyzeRule.js';
import { analyzeRuleCases } from '../src/services/__tests__/analyzeRule.test.js';

const results = analyzeRuleCases.map((content) => {
  const analysis = analyzeRule(content);

  return {
    content,
    matchedKeywords: analysis.matchedKeywords.join(', '),
    confidence: analysis.confidence,
    isRelevant: analysis.isRelevant,
  };
});

console.table(results);
