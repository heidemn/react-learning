.PHONY: run

run:
	command -v http-server >/dev/null || npm i -g http-server
	npx http-server
