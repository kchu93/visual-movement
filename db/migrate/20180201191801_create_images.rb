class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.integer :author_id, null: false
      t.string :description
      
      t.timestamps
    end
    add_index :images, :author_id
  end
end
