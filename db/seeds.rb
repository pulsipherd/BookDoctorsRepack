# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
books = Book.create(title: ,
                    author: ,
                    blurb: ,
                    difficulty: ,
                    keywords: ,
                    lessons: ,
                    user_id: , 
)


t.string "title"
    t.string "author"
    t.text "blurb"
    t.string "difficulty"
    t.string "keywords"
    t.string "lessons"
    t.bigint "user_id"