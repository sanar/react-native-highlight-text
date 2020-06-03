import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { findAll } from 'highlight-words-core';

interface HighlightTextProps extends TextProps {
    searchWords: string[];
    textToHighlight: string;
    autoEscape?: boolean;
    style?: TextStyle;
    highlightStyle?: TextStyle;
    highlightComponent?: React.ComponentType<TextProps>;
    sanitize?: (text: string) => string;
};

export default function HighlightText({
    searchWords,
    textToHighlight,
    autoEscape,
    style,
    highlightStyle,
    highlightComponent,
    sanitize,
    ...props
}: HighlightTextProps) {
    const chunks = findAll({textToHighlight, searchWords, sanitize, autoEscape});
    const Component = highlightComponent || Text;

    return (
        <Text style={style} {...props}>
            {chunks.map((chunk, index) => {
                const text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);

                return (!chunk.highlight)
                    ? text
                    : (
                        <Component key={index} style={chunk.highlight && highlightStyle}>
                            {text}
                        </Component>
                    );
            })}
        </Text>
    );
}
