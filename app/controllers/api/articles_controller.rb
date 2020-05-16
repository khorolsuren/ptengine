class Api::V1::ArticlesController < ApplicationController

  before_action :set_article, only: [:show]

  def index
    @articles = Article.all
  end

  def show
  end