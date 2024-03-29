import { type Dictionary } from 'style-dictionary';
import prettier from '@prettier/sync';
import { autogeneratedComment } from '../constant';

function groupTokensByAttributes(dictionary: Dictionary) {
  const groupedTokens = {};
  dictionary.allTokens.forEach((token) => {
    const item = token?.attributes?.item || 'default';
    const subItem = token?.attributes?.subitem;

    if (!groupedTokens[item]) groupedTokens[item] = {};

    if (item === 'border' && subItem) {
      if (!groupedTokens[item][subItem]) groupedTokens[item][subItem] = {};
      groupedTokens[item][subItem][token.name] = token.value;
    } else {
      groupedTokens[item][token.name] = token.value;
    }
  });
  return groupedTokens;
}

function formatValues(values) {
  return Object.entries(values)
    .map(([name, value]) => `${name}: ${JSON.stringify(value)},`)
    .join('\n');
}

function formatBorderValues(values) {
  return Object.entries(values)
    .map(([subItem, tokens]) => {
      const formattedTokens = formatValues(tokens);
      return `${subItem}: {${formattedTokens}    
      },`;
    })
    .join('\n');
}

function formatGroupedTokens(groupedTokens) {
  return Object.entries(groupedTokens)
    .map(([item, values]) => {
      const formattedValues =
        item === 'border' ? formatBorderValues(values) : formatValues(values);
      return `${item}: {${formattedValues}  
      },`;
    })
    .join('\n');
}

export const globalTokenFormatter = {
  name: 'custom/format',
  formatter: function ({ dictionary }) {
    const groupedTokens = groupTokensByAttributes(dictionary);
    const formattedTokens = formatGroupedTokens(groupedTokens);
    const output = `      
      export const base = {${formattedTokens}};`;
    return prettier.format(autogeneratedComment + output, {
      parser: 'typescript',
      singleQuote: true,
    });
  },
};
