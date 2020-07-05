class TestCasesController < ApplicationController
  before_action :find_test_case, only: [:show, :update, :destroy]

  def index
    @test_cases = TestCase.all
    render json: @test_cases
  end

  def show
    render json: @test_case
  end

  def create
    @test_case = TestCase.new(test_case_params)
    if @test_case.save
      render json: @test_case
    else
      render error: { error: 'Unable to create test case.' }, status: 400
    end
  end

  def update
    if @test_case
      @test_case.update(test_case_params)
      render json: { message: 'Test case successfully updated. ' }, status: 200
    else
      render error: {error: 'Unable to update test case.' }, status: 400
    end
  end

  def destroy
    if @test_case
      @test_case.destroy
      render json: { message: 'Test case successfully deleted. ' }, status: 200
    else
      render error: {error: 'Unable to delete test case.' }, status: 400
    end
  end

  private

  def test_case_params
    params.require(:test_case).permit(:title, :preconditions, :steps,
                                      :expected_results, :postconditions,
                                      :status)
  end

  def find_test_case
    @test_case = TestCase.find(params[:id])
  end
end
