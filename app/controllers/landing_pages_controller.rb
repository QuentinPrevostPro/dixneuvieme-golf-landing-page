class LandingPagesController < ApplicationController
  def index
  end
  def create
    @session = GoogleDrive::Session.from_service_account_key(StringIO.new(ENV['CLIENT_SECRET']))
    @ws = @session.spreadsheet_by_key("1MKrYhqrlNSb0sWRsqeBjeDIK9KEMmhI3sYxHSpxh-mg").worksheets[0]
    @ws[@ws.num_rows+1,2] = params[:email]
    @ws[@ws.num_rows,3] = "#{DateTime.now.day > 9 ? "#{DateTime.now.day}" : "0#{DateTime.now.day}"}/#{DateTime.now.month > 9 ? "#{DateTime.now.month}" : "0#{DateTime.now.month}"}/#{DateTime.now.year}"
    @ws.save
    redirect_to root_path
    flash[:success] = "Merci de ton intérêt pour GoBirdie. Nous revenons vite vers toi."
  end
end