import { createClient } from '@supabase/supabase-js'

const { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY } =
  process.env

if (!SUPABASE_URL) throw new Error('SUPABASE_URL is not found in environment variables.')
// if (!SUPABASE_ANON_KEY) throw new Error('SUPABASE_ANON_KEY is not found in environment variables.')
if (!SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY is not found in environment variables.')

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

export async function uploadFile(bucket: string, path: string, file: File) {
  const { data, error } = await supabase.storage.from(bucket).upload(path + new Date().getTime() + file.name, file)

  if (error) throw new Error(error.message)
  return data.path
}

export async function getPublicURL(bucket: string, path: string) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)

  return data.publicUrl
}
