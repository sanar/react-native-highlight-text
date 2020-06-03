# React Native Highlight Text
React Native component used to highlight words within a larger body of text. This is a port of [react-native-highlight-words](https://github.com/clauderic/react-native-highlight-words).

## Installation

With npm:
```
npm i --save react-native-highlight-text
```

With yarn:
```
yarn add react-native-highlight-text
```

## Usage

To use it, just provide it with an array of search terms and a body of text to highlight:

```jsx
import HighlightText from 'react-native-highlight-text';

<HighlightText
  highlightStyle={{backgroundColor: 'yellow'}}
  searchWords={['and', 'or', 'the']}
  textToHighlight='The dog is chasing the cat. Or perhaps they're just playing?'
/>
```

And the `HighlightText` component will highlight all occurrences of search terms within the text:

<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://cloud.githubusercontent.com/assets/29597/11914033/e3c319f6-a629-11e5-896d-1a5ce22c9ea2.png">


## Props

| Property        | Type          | Required? | Description                                                                                                             |
|:----------------|:--------------|:---------:|:------------------------------------------------------------------------------------------------------------------------|
| autoEscape      | Boolean       |           | Escape characters which are meaningful in regular expressions                                                           |
| highlightStyle  | Object        |           | Styles applied to highlighted text                                                                                      |
| sanitize        | Function      |           | Process each search word and text to highlight before comparing (eg remove accents); signature `(text: string): string` |
| searchWords     | Array<String> |     ✓     | Array of search words                                                                                                   |
| style           | Object        |           | Styles applied to the text wrapper                                                                                      |
| textToHighlight | String        |     ✓     | Text to highlight matches in                                                                                            |

## License
[MIT License](LICENSE)
