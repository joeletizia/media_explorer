defmodule WebWeb.Resolvers.Content do
  def list_tv_programs(_parent, _args, _resolution) do
    tv_programs = MediaBiz.TVPrograms.list_all

    {:ok, tv_programs}
  end
end
