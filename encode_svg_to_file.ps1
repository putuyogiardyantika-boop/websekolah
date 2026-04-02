$out = 'svg_base64.txt'
if (Test-Path $out) { Remove-Item $out }
Get-ChildItem .\images\*.svg | ForEach-Object {
  $s = [Convert]::ToBase64String([IO.File]::ReadAllBytes($_.FullName))
  Add-Content -Path $out -Value $_.Name
  Add-Content -Path $out -Value $s
  Add-Content -Path $out -Value '---'
}
