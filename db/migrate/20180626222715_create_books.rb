class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.text :blurb
      t.string :difficulty
      t.string :keywords
      t.string :lessons
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
