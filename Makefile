DEFAULT_GOAL := default


backend:
	@sh bootstrap_for_backend.sh $(PACKAGE_NAME)
frontend:
	@sh bootstrap_for_frontend.sh $(PACKAGE_NAME)
lerna:
	@sh bootstrap_lerna.sh 
default:
	@echo "Select one of backend/frontend/lerna"