.PHONY: deploy

deploy:
	aws s3 sync . s3://astroid-bullet-heaven --delete --exclude '.*' --exclude Makefile
