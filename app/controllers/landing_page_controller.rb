class LandingPageController < ApplicationController
  def index
    @session = GoogleDrive::Session.from_config("config.json")
    @ws = @session.spreadsheet_by_key("1MKrYhqrlNSb0sWRsqeBjeDIK9KEMmhI3sYxHSpxh-mg").worksheets[0]
    @ws[@ws.num_rows+1,2] = @ws.num_rows+1
    @ws[@ws.num_rows,3] = @ws.num_rows
    @ws.save
  end
end
