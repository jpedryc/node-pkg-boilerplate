test:
	NODE_ENV=test ./node_modules/.bin/mocha --timeout 180000 --reporter spec

.PHONY: test
