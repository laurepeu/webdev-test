# [aircall.io](https://aircall.io) - Web Dev technical test

This test is a part of our hiring process at Aircall for the [Web Dev position](https://www.welcometothejungle.co/companies/aircall/jobs/web-developer-junior_paris). It should take you between 5 and 8 hours depending on your experience.

**Feel free to apply! Drop us a line with your LinkedIn/GitHub/Twitter/AnySocialProfileWhereYouAreActive at jobs@aircall.io**


## Summary

The goal of this test is to make you code a new page on our website for the marketing team.

[Here is the link of the brief](https://docs.google.com/document/d/1Y-yKaza1ckRvZUuf7CsPRJaO-yEW9F0oqBc7M8j1BUE/edit?usp=sharing)


- **Flexbox** - use flexbox as much as possible
- **Cross-browser** - ow crap! Sorry about that but yes, it should work on all browsers (Chrome, Firefox, Safari)
- **Mobile first** - the view must be responsive and usable on all devices (mobile & desktop)
- **Fonts** - Don't spend time on that and use a google font
- **translation** - You have to create a switch in order to switch the content from EN to FR (I18n may help you 😇)
- **header and footer** - No need to code them but you can just create a simple header in order to put the language switch.


## Design

You're lucky, the marketing team did a nice draft in order to help you! 😋

![image](https://user-images.githubusercontent.com/19815229/37107703-5e12eaea-2235-11e8-8a67-e748e5e6690d.png)

For the design you have some assets in `sources/images`folder.
You have to keep in mind that your design need to fit with the rest of our [website](https://aircall.io) but don't hesitate to create elements, layouts icons etc. THe marketing brief is the fundation your role is to bring creativity.



## Code

In this repository you'll find a simple middleman skeleton. It's the structure for your test.


## Installation

You're smart, right? So you shouldn't need any instruction :)

Yes sure but i will add something below to make it work properly :)

---
### Prerequisites 

- Git 
- Homebrew for Mac OS X 
- Apt for Debian or Ubuntu
- NodeJs (stable version)

### Ruby Installation

First Install Ruby On Rails

-  For OS X :Homebrew 
```
$ brew install ruby
```

- For Debian or Ubuntu : apt
```
$ sudo apt-get install ruby-full
```
- For Windows : 
Go here [here](http://rubyinstaller.org/downloads/) and choose the version 2.3.X or higher and follow the steps trough the installation assistant (please make sur to add ruby as an executables to your Path)

### Rails Installation

```
$ gem install rails
```

### Middleman Installation

Then install Middleman:
Locate where the `Gemfile` is to run the following command in the same directory:

``` 
$ gem install middleman
```

```
$ bundle install
```

If you got error with **Windows** please run: 
```
$ bundle lock --add-platform x86-mswin32 x86-mingw32 java
```

### Run the Server

Last step :) 
You'll need to start the server to show the landing page. In order to make it work please run the following command :
```
$ middleman server
```
The landing page will be available [there](http://localhost:4567/)  :D

---

## Submission

Fork this repository and send us a pull request. We'll review it and get back to you in order to talk about your code!

Contact us at manou@aircall.io if you need more details.

 -->
