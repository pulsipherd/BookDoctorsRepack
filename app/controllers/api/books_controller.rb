class Api::BooksController < ApplicationController

  def index
    render json: Book.all
  end

  def create
    book = Book.new(book_params)
    if book.save
      render json: book
    else
      render json: { errors: book.errors }, status: :unprocessable_entity
    end
  end

  def update
    book = Book.find(params[:id])
    if book.update(book_params)
      render json: book
    else
      render json: { errors: book.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Book.find(params[:id]).destroy
    render json: { message: 'Book has been deleted' }
  end
  
  private
  
  def book_params
    params.require(:book).permit(:title, :author, :blurb, :difficulty, :keywords, :lessons)
  end
end
