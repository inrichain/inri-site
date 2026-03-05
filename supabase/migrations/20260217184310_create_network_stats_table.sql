/*
  # Create network stats table for INRI CHAIN

  1. New Tables
    - `network_stats`
      - `id` (uuid, primary key)
      - `block_number` (integer)
      - `gas_price` (numeric)
      - `active_nodes` (integer)
      - `tx_per_second` (numeric)
      - `total_supply` (numeric)
      - `staked_amount` (numeric)
      - `network_health` (numeric 0-100)
      - `timestamp` (timestamptz)

  2. Security
    - Enable RLS on `network_stats` table
    - Add policy for public read access (stats are public)
*/

CREATE TABLE IF NOT EXISTS network_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  block_number bigint NOT NULL,
  gas_price numeric(20,2) NOT NULL,
  active_nodes integer NOT NULL DEFAULT 0,
  tx_per_second numeric(10,2) NOT NULL DEFAULT 0,
  total_supply numeric(38,18) NOT NULL DEFAULT 0,
  staked_amount numeric(38,18) NOT NULL DEFAULT 0,
  network_health numeric(5,2) NOT NULL DEFAULT 95,
  timestamp timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE network_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Network stats are public"
  ON network_stats
  FOR SELECT
  TO public
  USING (true);

CREATE INDEX idx_network_stats_timestamp ON network_stats(timestamp DESC);
CREATE INDEX idx_network_stats_block ON network_stats(block_number DESC);
