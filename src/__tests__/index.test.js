import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

import HighlightText from '../';

describe('<HighlightText />', () => {
  it('should wrap each matched search word with an isolated element', () => {
    const props = {
      searchWords: ['hello', 'world'],
      textToHighlight: 'In this text we can do a hello to the entire world',
    };
    const { queryByText, toJSON } = render(<HighlightText {...props} />);

    for (const word of props.searchWords) {
      expect(queryByText(word)).toBeTruthy();
    }

    expect(toJSON()).toMatchSnapshot();
  });

  it('should detect all ocurrencies of searched words in textToHighlight prop', () => {
    const props = {
      searchWords: ['Slim', 'Shady'],
      textToHighlight:
        "I'm Slim Shady, yes, I'm the real Shady. All you other Slim Shadys, are just imitating. So won't the real Slim Shady, please stand up?",
    };
    const { getAllByText, toJSON } = render(<HighlightText {...props} />);

    expect(getAllByText('Slim')).toHaveLength(3);
    expect(getAllByText('Shady')).toHaveLength(4);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render properly with custom styles', () => {
    const props = {
      searchWords: ['hello', 'world'],
      textToHighlight: 'In this text we can do a hello to the entire world',
      style: { color: 'darkgray' },
      highlightStyle: { color: 'blue' },
    };

    const { queryByText, toJSON } = render(<HighlightText {...props} />);

    for (const word of props.searchWords) {
      expect(queryByText(word)).toHaveStyle(props.highlightStyle);
    }

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render properly with custom components', () => {
    const CustomText = (props) => (
      <Text style={{ color: '#333' }}>{props.children}</Text>
    );
    const CustomHighlight = (props) => (
      <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
    );
    const { toJSON } = render(
      <HighlightText
        searchWords={['hello', 'world']}
        textToHighlight={'In this text we can do a hello to the entire world'}
        textComponent={CustomText}
        highlightComponent={CustomHighlight}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
