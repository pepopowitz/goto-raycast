#!/bin/zsh -l

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title goto
# @raycast.mode silent

# Optional parameters:
# @raycast.icon 🏹
# @raycast.argument1 { "type": "text", "placeholder": "shortcode", "percentEncoded": true }

# Documentation:
# @raycast.description goto
# @raycast.author Steven Hicks
# @raycast.authorURL https://github.com/pepopowitz

node goto.js $1
echo "goneto!"