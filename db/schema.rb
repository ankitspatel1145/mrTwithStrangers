# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_13_185323) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.integer <img src={window.logoURL} width="100%"  null: false
    t.date "date", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "address", null: false
    t.time "time", null: false
    t.integer "spots", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city"], name: "index_events_on_city"
    t.index ["date"], name: "index_events_on_date"
    t.index ["host_id"], name: "index_events_on_host_id"
    t.index ["spots"], name: "index_events_on_spots"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "email", null: false
    t.boolean "can_host", default: false, null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "city", null: false
    t.index ["city"], name: "index_users_on_city"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
