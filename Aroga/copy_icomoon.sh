rm -rf icomoon
cp -r ~/Downloads/icomoon .
rm assets/css/icons.css
rm -rf static/css/fonts
cp icomoon/style.css assets/css/icons.css
cp -r icomoon/fonts static/css/
