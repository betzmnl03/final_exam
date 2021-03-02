Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://127.0.0.1:5500', 'localhost:5500'#whitelist domains
      resource(
          '/api/*',  #limit requests to paths that look like /api
          headers: :any,  #allow the request to contain any headers
          credentials: true, #allow to send and save cookies between domains with CORS
          methods: [:get, :post, :patch, :put, :options, :delete]) #allo these http verbs
    end
  end