# All my emoji children

I made a lot of emoji. I won't stop. But I will keep track of them. Please, enjoy my bounty.

### Wait I want this

1. Fork it!
1. Clear out my emoji.
  * Delete everying in the readme _after_ `<!--start emoji -->`
  * Delete any records files (i.e. files named 20XX-XX-XX)
  * empty the emoji directory
1. Get your details together
  * Find the name of your **Slack instance**. This is what it says in the upper left of your slack client, or in the url bar as $INSTANCE.slack.com
  * Find your **slack name**. This is sort of deceptively difficult if you have aliases or display names set up. You'll figure it out. it's probably your name.
  * Find your **slack token**. This is present on all logged-in slack pages, and can be found with the following method:
    * Log in to $instance.slack.com
    * Right click > inspect element anywhere
    * open the console tab
    * paste in `window.prompt("your api token is: ", window.boot_data.api_token)` and press return
    * Copy the token it gives you
    * get @ me if it doesn't give you a token
1. Generate a list of your emoji with `./generate.sh "$SLACK_NAME" "$SLACK_INSTANCE" "$SLACK_TOKEN"`

### What's going on here?

Take a look at https://github.com/jackellenberger/emojme !

### It's not working on my mac!

OSX's default sed is bad. Install gnu-sed and try again.

# And now:

<!--start emoji-->
