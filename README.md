# IonCustomScrollbar

This library is built to fascilitate the the scrollbar design for ionic-framework. The ionic framework is more powerful than ever since you can now build very high quality websites and PWAs along with with highly performant apps, all in one codebase.

But like every big platforms, there is a custom demand in ionic as well. The creators might not have thought about it but a lot of developers including me had this demand of providing custom scrolbar design. However, as ionic is now made of custom-elements, the scrollbar of ion-content seems to be hiding behind shadowRoot. So, if you are not that much proficient in handling shadowRoot throufg js, you can not achieve this with simple css or scss.

But even if you do, you have to do it for every ion-content and the process is not mere few lines of codes. You might make a directive but if you are really into ionic then you will have to end up doing so in all your projects.

Hence this thing comes, which you can import as a module and use as directive.

## Installation

Run `npm i ion-custom-scrollbar`

## Usage

Import the module on top of your lazy loaded module and insertinside the 'imports' array inside NgModule.
```
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar'

@NgModule({
  imports: [
    ...,
    IonCustomScrollbarModule
  ],
  declarations: [...]
})
```

Then use it in the ion-content like,
```
<ion-content scrollbar>
   ...
</ion-content>
```

The default style is:
```
@media(pointer: fine) {
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: #fff;
    }
    ::-webkit-scrollbar-track:hover {
      background: #f7f7f7;
    }
    ::-webkit-scrollbar-thumb {
      background: #ccc;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #888
    }
    .inner-scroll {
      scrollbar-width: thin
    }
}
```

Notice that I have used `@media(pointer: fine)` which is applied for devices with only mouse pointer allowed. This is the native behaviour of html5 scrollbar that it becomes a slim vanishable scrollbar in touch devices. But our concern is only screens where this big scrollbar comes. Hence the style is applied conditionally.

However you can pass your own design as well. Just write your own style as text and pass as `scrollbar=<your-custom-scrollbar-style>`

```
<ion-content scrollbar='you-custom-scrollbar-style'>
   ...
</ion-content>
```

It is better to store your style in a variable and pass it here.

## Apply Style On All Platforms

If you want to apply the design across all platforms, pass

```
<ion-content scrollbar allowAllScreens='true'>
   ...
</ion-content>
```

## Further help

To get more help please pose your question on forum.
