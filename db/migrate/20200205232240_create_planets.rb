# frozen_string_literal: true

class CreatePlanets < ActiveRecord::Migration[6.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.integer :rotation_period
      t.integer :orbital_period
      t.integer :diameter
      t.string :climate
      t.string :gravity
      t.string :terrain
      t.integer :surface_water
      t.integer :population

      t.timestamps
    end
  end
end
