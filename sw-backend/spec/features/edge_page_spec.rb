require 'spec_helper'

feature "edges page", js: true do
  scenario "see the list of all edges" do
    create_list(:edge, 3)
    p Edge.all
    visit ('/#/edges')
    expect(page).to have_css('ul#edges>li', count: 3)
  end

  scenario 'clicking on edge toggles description' do
    create(:edge, description: 'desc1')
    visit('/#/edges')
    expect(page).not_to have_content('desc1')
    first('ul#edges>li').click
    expect(page).to have_content('desc1')
  end

  scenario 'only one description is active' do
    create(:edge, description: 'desc1')
    create(:edge, description: 'desc2')
    visit('/#/edges')

    expect(page).not_to have_content('desc1')
    first('ul#edges>li').click
    expect(page).to have_content('desc1')
    all('ul#edges>li')[2].click
    expect(page).not_to have_content('desc1')
  end
end