const EventEmitter = require('events');

class WebhookEventEmitter extends EventEmitter {}

const webhookEventEmitter = new WebhookEventEmitter();

export const handleDepositTransactionConfirmation = (data) => {
  // Process the deposit transaction confirmation event
  console.log('Deposit Transaction Confirmation:', data);

  // Example: Update the wallet balance in your database
  const { user, wallet, amount, txid } = data;
  console.log(
    `User ${user.email} has deposited ${amount} ${wallet.currency}. Transaction ID: ${txid}`,
  );

  // Add your database update logic here
};

export const handleWalletAddressGenerated = (data) => {
  // Process the wallet address generated event
  // This is not getting called
  console.log('Wallet Address Generated:', data);

  // Example: Save the new wallet address in your database
  const { user, address, currency } = data;
  console.log(
    `New ${currency} address generated for user ${user.email}: ${address}`,
  );

  // Add your database save logic here
};

// Register event listeners
webhookEventEmitter.on(
  'deposit.transaction.confirmation',
  handleDepositTransactionConfirmation,
);
webhookEventEmitter.on(
  'wallet.address.generated',
  handleWalletAddressGenerated,
);
