# React Native Highlight Text

React Native component used to highlight words within a larger body of text. This is a port of [react-native-highlight-words](https://github.com/clauderic/react-native-highlight-words).

## Installation

With npm:

```
npm i --save @sanar/react-native-highlight-text
```

With yarn:

```
yarn add @sanar/react-native-highlight-text
```

## Usage

To use it, just provide it with an array of search terms and a body of text to highlight:

```jsx
import HighlightText from '@sanar/react-native-highlight-text';

<HighlightText
  highlightStyle={{ backgroundColor: 'yellow' }}
  searchWords={['and', 'or', 'the']}
  textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
/>;
```

And the `HighlightText` component will highlight all occurrences of search terms within the text:

<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://cloud.githubusercontent.com/assets/29597/11914033/e3c319f6-a629-11e5-896d-1a5ce22c9ea2.png">

## Props

You can pass all Text style props like `style` to the Text component that is used as a wrapper.

| Property           | Type          | Required? | Description                                                                                                                                         |
| :----------------- | :------------ | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| searchWords        | Array<String> |     ✓     | Array of search words                                                                                                                               |
| textToHighlight    | String        |     ✓     | Text to highlight matches in                                                                                                                        |
| autoEscape         | Boolean       |           | Escape characters which are meaningful in regular expressions; defaults to false                                                                    |
| caseSensitive      | Boolean       |           | Search should be case sensitive; defaults to false                                                                                                  |
| sanitize           | Function      |           | Process each search word and text to highlight before comparing (eg remove accents); signature `(text: string): string`; defaults to undefined      |
| highlightStyle     | Object        |           | Styles applied to highlighted text; defaults to undefined                                                                                           |
| textComponent      | Component     |           | Custom Text component to use instead of the default Text from React Native for the text. Should be TextProps compatible; defaults to undefined      |
| highlightComponent | Component     |           | Custom Text component to use instead of the default Text from React Native for the highlight. Should be TextProps compatible; defaults to undefined |

## License

[MIT License](LICENSE)
