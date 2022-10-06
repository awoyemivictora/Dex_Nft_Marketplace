# Simple react countdown

Simple countdown for React.

## Usage

### Install

You can use `npm` or `yarn`:

``` text
npm install on-react-countdown
```

``` text
yarn add on-react-countdown
```

### Basic usage

``` js
import React from 'react';
import Countdown from 'on-react-countdown';
 
ReactDOM.render(
  <Countdown end={1893456000} />,
  document.getElementById('root')
);
```

## Props

Name      | Type | Default
:-------- |:-----:| :-----: |
end  | number  | required
endInSeconds  | bool  | `false`
utc  | number  | `0`
lang  | string  | `en`
className  | string  | `Countdown`
text  | object  | look prop `text`
separator  | string  | `' '`
wordsEndingOff  | bool  | `false`
wordsOff  | bool  | `false`
hideZeroValues  | bool  | `false`
alwaysDoubleDigit  | bool  | `false`
limit  | number  | `null`
onEnd  | func  | `() => {}`

### `end`

End of timer on UNIX format

### `endInSeconds`

If `true`, in `end` the number of seconds should be passed before the timer ends

### `utc`

Utc zone, for New York - `utc={-4}`, for Moscow `utc={3}`

### `lang`

Language for time periods. Two types are available: English and Russian. English is selected by default. For English (French, German, etc.) there is no declension, so there are only two types of time periods - singular and plural - `['day', 'days']`.

For Russian (Ukrainian, Belorussian, etc.), declinations exists, therefore there are three types of time periods  - for one, for two to four, for five and more - `['день', 'дня', 'дней']`.

More information is available in `text`.

### `className`

Class for HTML elements

### `text`

An Object with the names of time periods. By default (English, etc):

``` js
{
    days: ['day', 'days'],
    hours: ['hour', 'hours'],
    minutes: ['minute', 'minutes'],
    seconds: ['second', 'seconds'],
}
```

For Russian, etc:

``` js
{
    days: ['день', 'дня', 'дней'],
    hours: ['час', 'часа', 'часов'],
    minutes: ['минута', 'минуты', 'минут'],
    seconds: ['секунда', 'секунды', 'секунд'],
}
```

if you use `wordsEndingOff={true}`, for English, etc.

``` js
{
    days: 'd',
    hours: 'h',
    minutes: 'm',
    seconds: 's',
}
```

For Russian, etc: 

``` js
{
    days: 'дн.',
    hours: 'ч.',
    minutes: 'мин.',
    seconds: 'сек.',
}
```

### `separator`

Separator for time periods

### `wordsEndingOff`

`wordsEndingOff={true}` uses if you pass the text similar to

``` js
{
    days: 'd',
    hours: 'h',
    minutes: 'm',
    seconds: 's',
}
```

### `wordsOff`

Only the values ​​of time periods are displayed, without text

### `hideZeroValues`

Hide time periods with a value of 0

### `alwaysDoubleDigit`

Always display the time period value with a two-digit number, **09 days 02 hours 17 minutes 01 second** instead of **9 days 2 hours 17 minutes 1 second**

### `limit`

It displays as many time periods as specified in limit, starting with a larger one. If the value of the time period is 0, the period is not taken into account

### `onEnd`

Callback function which is called at the end of the timer

The translation was undertaken by: [Antonova Anastasia](https://www.facebook.com/profile.php?id=100034403650990)
