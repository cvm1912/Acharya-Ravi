-- Create consultations table
CREATE TABLE IF NOT EXISTS consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  consultation_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public inserts" ON consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all consultations
CREATE POLICY "Allow authenticated reads" ON consultations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS consultations_created_at_idx ON consultations(created_at DESC);
CREATE INDEX IF NOT EXISTS consultations_status_idx ON consultations(status);
