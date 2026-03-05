/*
  # Create swap transactions table for INRI CHAIN

  1. New Tables
    - `swap_transactions`
      - `id` (uuid, primary key)
      - `user_address` (text)
      - `from_token` (text)
      - `to_token` (text)
      - `from_amount` (numeric)
      - `to_amount` (numeric)
      - `fee` (numeric)
      - `status` (text: pending, completed, failed)
      - `tx_hash` (text)
      - `timestamp` (timestamptz)

  2. Security
    - Enable RLS on `swap_transactions` table
    - Add policy for public read access (swaps are public on blockchain)
*/

CREATE TABLE IF NOT EXISTS swap_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_address text NOT NULL,
  from_token text NOT NULL,
  to_token text NOT NULL,
  from_amount numeric(38,18) NOT NULL,
  to_amount numeric(38,18) NOT NULL,
  fee numeric(38,18) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  tx_hash text UNIQUE,
  timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE swap_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Swap transactions are public"
  ON swap_transactions
  FOR SELECT
  TO public
  USING (true);

CREATE INDEX idx_swap_transactions_timestamp ON swap_transactions(timestamp DESC);
CREATE INDEX idx_swap_transactions_user ON swap_transactions(user_address);
CREATE INDEX idx_swap_transactions_status ON swap_transactions(status);
