defmodule WebWeb.Resolvers.Content do
  def list_tv_programs(_parent, _args, _resolution) do
    {:ok, [
      %{id: 1, name: "Howdy Doody"},
      %{id: 2, name: "The Price is Right"}
    ]}
  end
end
