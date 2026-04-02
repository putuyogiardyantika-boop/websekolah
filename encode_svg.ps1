Get-ChildItem .\images\*.svg | ForEach-Object {
    $b = [Convert]::ToBase64String([IO.File]::ReadAllBytes($_.FullName))
    Write-Output $_.Name
    Write-Output $b
    Write-Output '---'
}
