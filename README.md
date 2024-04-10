# Twitter Post Mockup

[https://twitter-post-mockup.vercel.app/](https://twitter-post-mockup.vercel.app/)

![](./doc/example.svg)

# Parameters
  
- [Twitter Post Mockup](#twitter-post-mockup)
- [Parameters](#parameters)
  - [theme](#theme)
  - [username](#username)
  - [verified](#verified)
  - [handle](#handle)
  - [text](#text)
  - [hashtags](#hashtags)
  - [date](#date)
  - [os](#os)
  - [retweets](#retweets)
  - [quotes](#quotes)
  - [likes](#likes)
  - [height](#height)
  - [width](#width)

| Query Parameter | Default                 | Description                            | Examples               |
| --------------- | ----------------------- | -------------------------------------- | ---------------------- |
| username        | `John Doe`              | Full user name to display              | -                      |
| verified        | `true`                  | Disables the Twitter Verified badge    | `false`                |
| handle          | `johndoe`               | User's twitter handle without `@`      | -                      |
| text            | Lorem Ipsum             | Tweet's content                        | -                      |
| hashtags        | `twittermockup`         | Tweets hashtags without `#`            | `ootd,food`            |
| date            | `00:00 AM Jan 01, 2022` | Date Text to display                   | -                      |
| os              | `iPhone`                | Text to display: `Twitter for {os}`    | `Android`, `Windows`   |
| retweets        | `100k`                  | Text to display for number of retweets | `100`, `1M`            |
| quotes          | `50k`                   | Text to display for number of quote    | `100`, `1M`            |
| likes           | `300k`                  | Text to display for number of likes    | `100`, `1M`            |
| w               | `778`                   | Width of the svg                       | -                      |
| h               | `600`                   | Height of the svg                      | -                      |
| theme           | `light`                 | Theme of the post                      | `light`, `dim`, `dark` |

## theme

`?theme=dim`

![](./doc/example_dim.svg)

`?theme?dark`

![](./doc/example_dark.svg)

## username

`?username=Elon%20Musk`

![](./doc/example_username.svg)

## verified

`?verified=false`

![](./doc/example_verified.svg)

## handle

`?handle=ElonMusk`

![](./doc/example_handle.svg)

## text

`?text=I%20want%20to%20go%20to%20space`

![](./doc/example_text.svg)

## hashtags

`?hashtags=ootd,food`

![](./doc/example_hashtags.svg)

## date

**WARNING!** The date parameter is not validated!

`?date=This%20is%20not%20a%20valid%20date`

![](./doc/example_date.svg)

## os

`?os=Android`

![](./doc/example_os.svg)

## retweets

`?retweets=1M`

![](./doc/example_retweets.svg)

## quotes

`?quotes=1M`

![](./doc/example_quotes.svg)

## likes

`?likes=1M`

![](./doc/example_likes.svg)

## height

**WARNING:** The bounding box of the tweet **does not adapt** to the height, but the image will use up as much space as you give it. Use this only when the image itself uses up to much space or when parts of the tweet are cut off. 

`?h=1000`

![](./doc/example_height.svg)

## width

**WARNING:** The bounding box of the tweet **does adapt** to the width and the image will use up as much space as you give it. The height of the tweet hugs the height of the content.

`?w=1000`

![](./doc/example_width.svg)
