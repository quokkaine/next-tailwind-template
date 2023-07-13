service := TODO_APP_NAME
version := 0.0.1
gcloud_proj_id := TODO_GCLOUD_PROJECT_ID
cluster := TODO_ORGANIZATION
gcr-image := gcr.io/${gcloud_proj_id}/${service}:${version}
root := $(abspath $(shell pwd))
port := 80

list:
	@grep '^[^#[:space:]].*:' Makefile | grep -v ':=' | grep -v '^\.' | sed 's/:.*//g' | sed 's/://g' | sort

install-dependencies:
	pip install bumpversion
	npm install

format:
	npm run format

dev:
	npm start

docker-build:
	docker build -t $(gcr-image) .

docker-dev:
	make docker-build
	make docker-run

docker-push:
	docker push $(gcr-image)

docker-run:
	@docker run -itp $(port):$(port)  $(gcr-image)

bumpversion-patch:
	bumpversion patch --allow-dirty

bumpversion-minor:
	bumpversion minor --allow-dirty

bumpversion-major:
	bumpversion major --allow-dirty
