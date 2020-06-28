import React from 'react';
import { Text } from 'react-native';
import { create } from 'react-test-renderer';

import HighlightText from '../';

describe('<HighlightText />', () => {
  it('should render properly', () => {
    const wrapper = create(
      <HighlightText
        searchWords={['hello', 'world']}
        textToHighlight={'In this text we can do a hello to the entire world'}
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render properly with custom styles', () => {
    const wrapper = create(
      <HighlightText
        searchWords={['hello', 'world']}
        textToHighlight={'In this text we can do a hello to the entire world'}
        style={{ color: 'darkgray' }}
        highlightStyle={{ color: 'blue' }}
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render properly with custom components', () => {
    const CustomText = (props) => (
      <Text style={{ color: '#333' }}>{props.children}</Text>
    );
    const CustomHighlight = (props) => (
      <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
    );
    const wrapper = create(
      <HighlightText
        searchWords={['hello', 'world']}
        textToHighlight={'In this text we can do a hello to the entire world'}
        textComponent={CustomText}
        highlightComponent={CustomHighlight}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
