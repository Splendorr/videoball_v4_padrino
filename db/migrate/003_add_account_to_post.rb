migration 3, :add_account_to_post do
  up do
    modify_table :posts do
      first_account = Account.first
      add_column :account_id, Integer, :default => first_account
    end
  end

  down do
    modify_table :posts do
      drop_column :account_id
    end
  end
end
