defmodule WebWeb.Router do
  use WebWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  forward "/graphiql", Absinthe.Plug.GraphiQL,
    schema: WebWeb.Schema,
    socket: WebWeb.UserSocket

  scope "/", WebWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", WebWeb do
  #   pipe_through :api
  # end
end
