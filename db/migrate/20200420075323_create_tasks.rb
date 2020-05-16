class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.string :string
      t.string :is_done
      t.string :boolean

      t.timestamps
    end
  end
end
