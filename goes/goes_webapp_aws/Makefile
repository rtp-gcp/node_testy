public/js/bundle.js: public/js/script.js
	browserify public/js/script.js -o public/js/bundle.js

package.zip:
	zip package.zip *

runlocal:
	npm run devStart

deploy:
	echo do aws version of gcloud app deploy

clean:
	rm package.zip

