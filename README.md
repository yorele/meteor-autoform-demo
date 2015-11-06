#Meteor autoform demo

##Packages used

### autoform
- github project: https://github.com/aldeed/meteor-autoform

```bash
meteor add aldeed:autoform
```

- live demo site: http://autoform.meteor.com/

### simple-schema

autoform requires `simple-schema`, a schema definition package to describe the data

- github: https://github.com/aldeed/meteor-simple-schema
```bash
meteor add aldeed:simple-schema
```

### collection2

- github: https://github.com/aldeed/meteor-collection2

`collection2` is another required package to attach a schema to a Mongo collection for auto-validation on client and server side.

```bash
meteor add aldeed:collection2
```

### Semantic-UI

- Docs: http://semantic-ui.com/introduction/getting-started.html

- github: https://github.com/fabienb4/meteor-autoform-semantic-ui/

```bash
meteor add semantic:ui
meteor add semantic:ui-css
```

### My favorite debug tool: meteor toys

```bash
 meteor add meteortoys:allthings
```

DISCLAIMER: don't publish your code 'as-is' (dev mode): deploy! 
Meteor Toys will be removed if you deploy your app. Otherwise it won't and anything goes.

## Step 1

create a form



## remove autopublish
## remove insecure