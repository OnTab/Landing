class CreateMerchants < ActiveRecord::Migration
  def change
    create_table :merchants do |t|
      t.string :email
      t.string :phone
      t.string :processor
      t.string :merch_id
      t.string :terminal_id

      t.timestamps
    end
  end
end
