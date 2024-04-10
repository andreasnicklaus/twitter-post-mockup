<p align="center">
  <img src="public/favicon.svg" width=100>
</p>
<h1 align="center">Twitter Post Mockup</h1>

<p align="center">
  <a href="https://astro.build/">
    <img src="https://img.shields.io/badge/Built_with-Astro-BC52EE?style=for-the-badge&logo=Astro">
  </a>
  <a href="https://twitter-post-mockup.vercel.app/">
    <img src="https://img.shields.io/badge/Try_it-yourself-1da1f2?style=for-the-badge&logo=Vercel">
  </a>
  <a href="https://twitter-post-mockup.vercel.app/">
    <img src="https://img.shields.io/website?url=https%3A%2F%2Ftwitter-post-mockup.vercel.app%2F&up_message=online&down_message=currently%20not%20online&style=for-the-badge&label=Service%20is">
  </a>
  <br/>
  <a href="https://twitter-post-mockup.vercel.app/">https://twitter-post-mockup.vercel.app/</a>
</p>


![](https://twitter-post-mockup.vercel.app/)

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

# Parameters

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

`https://twitter-post-mockup.vercel.app/?theme=dim`

![](https://twitter-post-mockup.vercel.app/?theme=dim)

`https://twitter-post-mockup.vercel.app/?theme=dark`

![](https://twitter-post-mockup.vercel.app/?theme=dark)

## username

`?username=Elon%20Musk`

![](https://twitter-post-mockup.vercel.app/?username=Elon%20Musk)

## verified

`?verified=false`

![](https://twitter-post-mockup.vercel.app/?verified=false)

## handle

`?handle=ElonMusk`

![](https://twitter-post-mockup.vercel.app/?handle=ElonMusk)

## text

`?text=I%20want%20to%20go%20to%20space`

![](https://twitter-post-mockup.vercel.app/?text=I%20want%20to%20go%20to%20space)

## hashtags

`?hashtags=ootd,food`

![](https://twitter-post-mockup.vercel.app/?hashtags=ootd,food)

## date

**WARNING!** The date parameter is not validated!

`?date=This%20is%20not%20a%20valid%20date`

![](https://twitter-post-mockup.vercel.app/?date=This%20is%20not%20a%20valid%20date)

## os

`?os=Android`

![](https://twitter-post-mockup.vercel.app/?os=Android)

## retweets

`?retweets=1M`

![](https://twitter-post-mockup.vercel.app/?retweets=1M)

## quotes

`?quotes=1M`

![](https://twitter-post-mockup.vercel.app/?quotes=1M)

## likes

`?likes=1M`

![](https://twitter-post-mockup.vercel.app/?likes=1M)

## height

**WARNING:** The bounding box of the tweet **does not adapt** to the height, but the image will use up as much space as you give it. Use this only when the image itself uses up to much space or when parts of the tweet are cut off. 

`?h=1000`

![](https://twitter-post-mockup.vercel.app/?h=1000)

## width

**WARNING:** The bounding box of the tweet **does adapt** to the width and the image will use up as much space as you give it. The height of the tweet hugs the height of the content.

`?w=1000`

![](https://twitter-post-mockup.vercel.app/?w=1000)
