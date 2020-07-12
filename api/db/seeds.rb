require 'faker'

statuses = ["Untested", "Passed", "Failed", "Blocked"]

25.times do |i|
  TestCase.create(
    title: "Test Case ##{i}",
    description: Faker::Lorem.sentence,
    preconditions: Faker::Lorem.paragraph,
    steps: Faker::Lorem.paragraph(
      sentence_count: 2, supplemental: true, random_sentences_to_add: 4
    ),
    expected_results: Faker::Lorem.paragraph,
    postconditions: Faker::Lorem.paragraph,
    status: statuses.sample
  )
end
