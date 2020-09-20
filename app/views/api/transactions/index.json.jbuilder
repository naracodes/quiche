# @transactions.each do |transaction|
#     # debugger
#     json.set! transaction.id do
#         # debugger
#         json.extract! transaction, :user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share
#     end
# end

# @saved_records.each do |record|
#     json.set! record.user_id do
#         json.extract! record, :user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share
#     end
# end

@saved_records.each do |saved_record|
    json.set! saved_record.id do
        json.extract! saved_record, :user_id, :ticker, :transaction_type, :transaction_amount, :quantity, :cost_per_share
    end
end