class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :image_url, null: false
      t.integer :author_id, null: false
      t.string :description

      t.timestamps
    end
    add_index :images, :author_id
    add_index :images, :image_url,  unique: true
  end
end
