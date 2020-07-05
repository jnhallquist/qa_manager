class CreateTestCases < ActiveRecord::Migration[6.0]
  def change
    create_table :test_cases do |t|
      t.string :title
      t.text :preconditions
      t.text :steps
      t.text :expected_results
      t.text :postconditions
      t.string :status

      t.timestamps
    end
  end
end
