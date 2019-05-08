defmodule WebWeb.Schema do
  use Absinthe.Schema

  import_types Absinthe.Type.Custom

  alias WebWeb.Resolvers

  @desc "A user of the blog"
  object :tv_program do
    field :id, :id
    field :name, :string
  end

  query do
    @desc "Get all TV programs"
    field :tv_programs, list_of(:tv_program) do
      resolve &Resolvers.Content.list_tv_programs/3
    end
  end

  mutation do
  end
end
